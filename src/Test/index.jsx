import React, { useState, useEffect } from 'react'
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { TreeSelect } from 'primereact/treeselect';
const data = [{
    "key": "0",
    "label": "Documents",
    "data": "Documents Folder",
    "icon": "pi pi-fw pi-inbox",
    "children": [{
        "key": "0-0",
        "label": "Work",
        "data": "Work Folder",
        "icon": "pi pi-fw pi-cog",
        "children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]
    },
    {
        "key": "0-1",
        "label": "Home",
        "data": "Home Folder",
        "icon": "pi pi-fw pi-home",
        "children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]
    }]
},
{
    "key": "1",
    "label": "Events",
    "data": "Events Folder",
    "icon": "pi pi-fw pi-calendar",
    "children": [
        { "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },
        { "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },
        { "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]
},
{
    "key": "2",
    "label": "Movies",
    "data": "Movies Folder",
    "icon": "pi pi-fw pi-star-fill",
    "children": [{
        "key": "2-0",
        "icon": "pi pi-fw pi-star-fill",
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{ "key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]
    },
    {
        "key": "2-1",
        "label": "Robert De Niro",
        "icon": "pi pi-fw pi-star-fill",
        "data": "De Niro Movies",
        "children": [{ "key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]
    }]
}
]


const style = {
    position: 'absolute',
    // width: '100vw',
    // height: '100vh',
    // background: 'rgba(100,100,100,1)',
    // color: 'white'
    background: 'white'
}

  
const Test = () => {

    const [nodes, setNodes] = useState(data);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    return <div className="test" style={style}>
        <TreeSelect value={selectedNodeKey} options={data} onChange={
                (e) => {
                    console.log(e)
                    setSelectedNodeKey(e.value)
                }} placeholder="Select Item"></TreeSelect>

        {/* <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
            onNodeSelect={(e)=>{
                console.log(e, e.target)
            }}
        >
            <TreeItem nodeId="1" label="Applications">
                <TreeItem nodeId="2" label="Calendar" />
                <TreeItem nodeId="3" label="Chrome" />
                <TreeItem nodeId="4" label="Webstorm" />
            </TreeItem>
            <TreeItem nodeId="5" label="Documents">
                <TreeItem nodeId="6" label="Material-UI">
                    <TreeItem nodeId="7" label="src">
                        <TreeItem nodeId="8" label="index.js" />
                        <TreeItem nodeId="9" label="tree-view.js" />
                    </TreeItem>
                </TreeItem>
            </TreeItem>
        </TreeView> */}
    </div>
}

export default Test;