import { TopBar } from "@shopify/polaris";
import {ArrowLeftMinor, QuestionMarkMajor} from '@shopify/polaris-icons';
import React from "react";

const Topbar = (props) => {
  
    return (
        <TopBar
            showNavigationToggle
            // userMenu={userMenuMarkup}
            // secondaryMenu={secondaryMenuMarkup}
            // searchResultsVisible={isSearchActive}
            // searchField={searchFieldMarkup}
            // searchResults={searchResultsMarkup}
            // onSearchResultsDismiss={handleSearchResultsDismiss}
            onNavigationToggle={()=>props.toggle(!props.state)}
        />
    )
}

export default Topbar;