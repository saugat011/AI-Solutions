'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { menuItems as staticMenuItems, settingsItems, MenuItem as MenuItemType } from './data';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItemType[]>(staticMenuItems);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const res = await fetch('/api/admin/badges');
        const data = await res.json();
        
        const updatedItems = staticMenuItems.map(item => {
          if (item.title === 'Customer Inquiries') {
            return { ...item, badge: data.inquiries || null };
          }
          if (item.title === 'Notifications') {
            return { ...item, badge: data.notifications || null };
          }
          return item;
        });
        
        setMenuItems(updatedItems);
      } catch (error) {
        console.error('Failed to fetch badges');
        setMenuItems(staticMenuItems);
      }
    };

    fetchBadges();
    const interval = setInterval(fetchBadges, 10000);
    
    const handleRefresh = () => fetchBadges();
    window.addEventListener('refreshSidebar', handleRefresh);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('refreshSidebar', handleRefresh);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/auth');
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const MenuItem = ({ item, isSubmenuItem = false }: { item: MenuItemType, isSubmenuItem?: boolean }) => {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const ItemIcon = item.icon;
    
    return (
      <div>
        <button
          onClick={() => {
            if (item.submenu) {
              setShowSubmenu(!showSubmenu);
            } else {
              router.push(item.href);
            }
          }}
          className={`
            w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200
            ${isActive(item.href) 
              ? 'bg-blue-500 text-white shadow-lg' 
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }
            ${collapsed && !isSubmenuItem ? 'justify-center' : ''}
            ${isSubmenuItem ? 'text-sm ml-4' : ''}
          `}
        >
          <ItemIcon size={isSubmenuItem ? 16 : 20} className="flex-shrink-0" />
          
          {!collapsed && (
            <>
              <span className="flex-1 font-medium">{item.title}</span>
              {item.badge && (
                <span className={`
                  px-2 py-0.5 text-xs rounded-full font-semibold
                  ${isActive(item.href) 
                    ? 'bg-white/20 text-white' 
                    : 'bg-blue-500 text-white'
                  }
                `}>
                  {item.badge}
                </span>
              )}
              {item.submenu && (
                <ChevronRight 
                  size={16} 
                  className={`transform transition-transform ${showSubmenu ? 'rotate-90' : ''}`}
                />
              )}
            </>
          )}
        </button>

        {item.submenu && showSubmenu && !collapsed && (
          <div className="mt-1 space-y-1">
            {item.submenu.map((subItem, index) => (
              <MenuItem key={index} item={subItem} isSubmenuItem />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`
      bg-white border-r border-gray-200 flex flex-col transition-all duration-300
      ${collapsed ? 'w-16' : 'w-64'}
      ${className}
    `}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <h2 className="text-xl font-bold text-blue-500">AI-Solutions</h2>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-2">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        {!collapsed && (
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Settings
          </div>
        )}
        <div className="space-y-1">
          {settingsItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className={`
            w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors
            ${collapsed ? 'justify-center' : ''}
          `}
        >
          <LogOut size={20} className="flex-shrink-0" />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
}
