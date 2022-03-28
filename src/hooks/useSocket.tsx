import { useEffect, useRef, useState } from 'react';

interface UseSocketInterface {
	onConnect?: Function;
	onMessage?: Function;
	onDisconnect?: Function;
}

function useSocket({ onConnect, onMessage, onDisconnect }: UseSocketInterface) {
	const socket = useRef<WebSocket | null>(null);
	const [isConnected, setIsConnected] = useState(false);
	const [data, setData] = useState<any>(null);

	const connect = () => {
		if (!process.env.REACT_APP_SOCKET_URL) {
			throw new Error('REACT_APP_SOCKET_URL is not defined');
		}
		if (socket.current?.readyState !== WebSocket.OPEN) {
			socket.current = new WebSocket(process.env.REACT_APP_SOCKET_URL);
			socket.current.addEventListener('open', () => {
				setIsConnected(true);
				if (onConnect) onConnect();
			})
			socket.current.addEventListener('close', () => {
				socket.current?.close()
				setIsConnected(false);
				if (onDisconnect) onDisconnect();
			})
			socket.current.addEventListener('message', (event) => {
				setData(JSON.parse(event.data))
				if (onMessage) onMessage(data);
			})
		}
	}

	const disconnect = () => {
		socket.current?.close()
		setIsConnected(false);
	}

	useEffect(() => {
		connect();
		return () => disconnect();
	}, []);

	const sendData = (data: object) => {
		socket.current?.send(JSON.stringify(data));
	}

	return {
		socket,
		isConnected,
		data,
		connect,
		disconnect,
		sendData
	};
}

export { useSocket };
