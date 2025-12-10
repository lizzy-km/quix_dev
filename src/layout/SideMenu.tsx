import { createTreeCollection, TreeView } from "@chakra-ui/react"
import type { JSX } from "@emotion/react/jsx-runtime"
import { useEffect } from "react"
import { BiCollection } from "react-icons/bi"
import { FcAbout } from "react-icons/fc"
import { LuChevronRight, LuFile, LuFolder } from "react-icons/lu"
import { RiContactsLine, RiFunctionAddLine } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import { TbBrandTypescript, TbSmartHome, TbUserQuestion } from "react-icons/tb"
import { NavLink, useLocation } from "react-router-dom"

interface Node {
    id: string
    name: string,
    icon?: JSX.Element
    children?: Node[]
}

const collection = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
        id: "ROOT",
        name: "",
        children: [

            {
                id: "Menu",
                name: "Menu",
                children: [
                    { id: "Menu/Home.tsx", name: "Home.tsx",
                        icon:<TbSmartHome />
                     },
                    { id: "Menu/About.tsx", name: "About.tsx",
                         icon:<TbUserQuestion  />
                     },
                    { id: "Menu/Skills.tsx", name: "Skills.tsx",
                         icon:<RiFunctionAddLine       />
                     },
                    { id: "Menu/Projects.tsx", name: "Projects.tsx",
                        icon:<BiCollection  />
                     },
                    { id: "Menu/Contact.tsx", name: "Contact.tsx",
                         icon:<RiContactsLine   />
                     },

                ],
            }
        ],
    },
})
export default function SideMenu() {


   
    return (
        <TreeView.Root  expandedValue={['Menu']} collection={collection} maxW="sm" expandOnClick={false}>
            <TreeView.Label>Quix</TreeView.Label>
            <TreeView.Tree>
                <TreeView.Node
                    indentGuide={<TreeView.BranchIndentGuide />}
                    render={({ node, nodeState }) =>
                        nodeState.isBranch ? (
                            <TreeView.BranchControl
                                _selected={{
                                    color: '#d8d8d8',
                                    backgroundColor: '#d8d8d818'
                                }} _active={{
                                    color: '#d8d8d8',
                                    backgroundColor: '#d8d8d818'
                                }}
                                _hover={{
                                    backgroundColor: '#d8d8d818'
                                }}
                                style={{
                                    marginBlock: '4px'
                                }}
                            >
                                <TreeView.BranchTrigger>
                                    <TreeView.BranchIndicator asChild>
                                        <LuChevronRight />
                                    </TreeView.BranchIndicator>
                                </TreeView.BranchTrigger>
                                <LuFolder />
                                <TreeView.BranchText>{node.name}</TreeView.BranchText>
                            </TreeView.BranchControl>
                        ) : (
                            <TreeView.Item 
                                _selected={{
                                    color: '#d8d8d8',
                                    backgroundColor: 'transparent'
                                }} _active={{
                                    color: '#d8d8d8',
                                    backgroundColor: 'transparent'
                                }}
                                _hover={{
                                    backgroundColor: 'transparent'
                                }}
                                style={{
                                    marginBlock: '2px'
                                }}
                            >
                                <NavLink  style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    paddingBlock: 8,
                                    paddingInline: 4,
                                    gap: 8,
                                }} to={`/${node.name.replace('.tsx', '').toLowerCase()}`}>
                                   {/* {node.icon ? node.icon : <LuFile />} */}
                                   <SiTypescript />
                                    <TreeView.ItemText>{node.name}</TreeView.ItemText>
                                </NavLink>

                            </TreeView.Item>
                        )
                    }
                />
            </TreeView.Tree>
        </TreeView.Root>
    )
}