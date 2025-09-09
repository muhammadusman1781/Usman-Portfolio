import { Box, Tab, Tabs } from "@mui/material";
import TabPanel from "../TabPanel";
import { useState } from "react";
import AllProjects from "./AllProjects";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function PortfolioTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Test" {...a11yProps(1)} />
        <Tab label="A2" {...a11yProps(2)} />
        <Tab label="Al" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AllProjects />
      </TabPanel>
    </Box>
  );
}
