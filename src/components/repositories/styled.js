import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: rgba(2,136,209,0.3);
    margin: 8px;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 5px 3px 8px rgba(0,0,0,0.3);
    }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid #ccc;
    display: none;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
`
WrapperTabPanel.tabsRole = "TabPanel";