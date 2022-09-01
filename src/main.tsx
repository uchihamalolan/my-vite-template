import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './appy';

import '@unocss/reset/tailwind.css';
import 'antd/dist/antd.css';
import 'uno.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
