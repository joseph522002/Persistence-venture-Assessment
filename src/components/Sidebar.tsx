import { memo } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import {
        FaChartBar,
        FaChartLine,
        FaArrowUp,
        FaPodcast,
        FaUsers,
        FaCog
    } from 'react-icons/fa';

    // Move navigation data outside component to prevent recreation on re-renders
    const navigation = [
        { name: 'Dashboard', path: '/', icon: FaChartBar },
        { name: 'Analytics', path: '/analytics', icon: FaChartLine },
        { name: 'Growth', path: '/growth', icon: FaArrowUp },
        { name: 'Episodes', path: '/episodes', icon: FaPodcast },
        { name: 'Audience', path: '/audience', icon: FaUsers },
        { name: 'Settings', path: '/settings', icon: FaCog },
    ] as const;

    // Create a separate component for nav items
    const NavItem = memo(({
                              item,
                              isActive
                          }: {
        item: typeof navigation[number];
        isActive: boolean;
    }) => (
        <Link
            key={item.name}
            to={item.path}
            className={`
          flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg
          transition-colors duration-200 ease-in-out
          ${isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }
        `}
            aria-current={isActive ? 'page' : undefined}
        >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
        </Link>
    ));

    const Sidebar = () => {
        const location = useLocation();

        return (
            <aside className="flex flex-col w-64 h-full bg-white border-r">
                <div className="flex items-center justify-center h-16 border-b">
                    <FaChartBar className="w-8 h-8 text-indigo-600" />
                    <span className="ml-2 text-xl font-bold text-gray-900">Chartable</span>
                </div>
                <nav className="flex-1 px-4 mt-6 space-y-1" aria-label="Main Navigation">
                    {navigation.map((item) => (
                        <NavItem
                            key={item.name}
                            item={item}
                            isActive={location.pathname === item.path}
                        />
                    ))}
                </nav>
            </aside>
        );
    };

    export default memo(Sidebar);