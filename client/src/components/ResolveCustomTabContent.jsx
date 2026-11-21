import AspirationAtWorkTab1 from '../components/tabs/AspirationTab1';
import AspirationAtWorkTab2 from '../components/tabs/AspirationTab2';
import AspirationAtWorkTab3 from '../components/tabs/AspirationTab3';
import AspirationAtWorkTab4 from '../components/tabs/AspirationTab4';
import AspirationAtWorkTab5 from '../components/tabs/AspirationTab5';
import AspirationAtWorkTab6 from '../components/tabs/AspirationTab6';
import GalleryTab1 from '../components/tabs/GalleryTab1';
import GalleryTab2 from '../components/tabs/GalleryTab2';
import ForumAndColouringTab1 from '../components/tabs/ForumTab1';
import ForumAndColouringTab2 from '../components/tabs/ForumTab2';
import ForumAndColouringTab3 from '../components/tabs/ForumTab3';

const CUSTOM_TAB_COMPONENTS = {
    AspirationAtWorkTab1,
    AspirationAtWorkTab2,
    AspirationAtWorkTab3,
    AspirationAtWorkTab4,
    AspirationAtWorkTab5,
    AspirationAtWorkTab6,
    GalleryTab1,
    GalleryTab2,
    ForumAndColouringTab1,
    ForumAndColouringTab2,
    ForumAndColouringTab3,
};

function ResolveCustomTabContent({ customTabKey }) {
    if (!customTabKey) return null;

    const Component = CUSTOM_TAB_COMPONENTS[customTabKey];

    if (!Component) {
        console.warn(`No custom tab component found for key: ${customTabKey}`);
        return null;
    }

    return <Component />;
}

export default ResolveCustomTabContent;
