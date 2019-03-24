import Logo from './components/Logo';
import LogoSymbol from './components/LogoSymbol';
import Colors from './components/Colors';
import Typhography from './components/Typhography';
import Mascot from './components/Mascot';
import Illustrations from './components/Illustrations';
import LoadersAndAnimations from './components/LoadersAndAnimations';
import Wallpapers from './components/Wallpapers';

export default {
    mode: 'history',

    linkActiveClass: 'font-bold',

	routes: [
		{
			path: '/',
			component: Logo
		},

		{
			path: '/logo-symbol',
			component: LogoSymbol
		},

		{
			path: '/colors',
			component: Colors
		},

		{
			path: '/typhography',
			component: Typhography
		},

		{
			path: '/mascot',
			component: Mascot
		},

		{
			path: '/illustrations',
			component: Illustrations
		},

		{
			path: '/loaders-and-animations',
			component: LoadersAndAnimations
		},

		{
			path: '/wallpapers',
			component: Wallpapers
		}
	]
};