import React from "react";
import {HomeMinor, OrdersMinor, ProductsMinor} from '@shopify/polaris-icons';
import { Navigation } from "@shopify/polaris";

function Sidebar() {
    return(
        <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: '#',
              label: 'Dashboard',
              icon: HomeMinor,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Orders',
              icon: OrdersMinor,
              badge: '15',
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Products',
              icon: ProductsMinor,
            },
          ]}
        />
      </Navigation>
    )
}

export default Sidebar;