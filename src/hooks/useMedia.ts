import { useMediaQuery } from 'react-responsive';

type UseMedia = () => {
	isMobile: boolean;
	isDesktop: boolean;
	isTablet: boolean;
};
const useMedia: UseMedia = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
	const isDesktop = useMediaQuery({ query: '(min-width: 1023px)' });
	let isTablet = false;
	if (!isMobile && !isDesktop) {
		isTablet = true;
	}
	return { isMobile, isDesktop, isTablet };
};
export default useMedia;
