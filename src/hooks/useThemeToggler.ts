import { useEffect, useState } from 'react';

export type ThemeLiteralType = 'light' | 'dark';

interface ArgType {
	activeHandler?: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function useThemeToggler(params?: ArgType) {
	const [theme, setTheme] = useState<ThemeLiteralType>('light');

	const updateTheme = (addTheme: ThemeLiteralType, store: boolean = false) => {
		const dom = document.documentElement.classList;
		dom.remove(addTheme === 'dark' ? 'light' : 'dark');
		if (params?.activeHandler) params.activeHandler(addTheme === 'dark' ? true : false);
		dom.add(addTheme);
		setTheme(addTheme);
		if (store) localStorage.setItem('theme', addTheme);
	};

	useEffect(() => {
		if (typeof window !== 'undefined' && window.localStorage) {
			const currTheme = localStorage.getItem('theme') as ThemeLiteralType;
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
			updateTheme(currTheme || systemTheme);
		}
		return () => {};
	}, []);

	return { theme, updateTheme };
};