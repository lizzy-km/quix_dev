import { createTreeCollection, TreeView } from "@chakra-ui/react"
import { LuChevronRight, LuFile, LuFolder } from "react-icons/lu"
import { NavLink } from "react-router-dom"

interface Node {
    id: string
    name: string
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
                    { id: "Menu/Home.tsx", name: "Home.tsx" },
                    { id: "Menu/About.tsx", name: "About.tsx" },
                    { id: "Menu/Skills.tsx", name: "Skills.tsx" },
                    { id: "Menu/Projects.tsx", name: "Projects.tsx" },
                    { id: "Menu/Contact.tsx", name: "Contact.tsx" },

                ],
            }
        ],
    },
})
export default function SideMenu() {
    return (
        <TreeView.Root expandedValue={['Menu']} collection={collection} maxW="sm" expandOnClick={false}>
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
                                <NavLink style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    paddingBlock: 8,
                                    paddingInline: 4
                                }} to={`/${node.name.replace('.tsx', '').toLowerCase()}`}>
                                    <LuFile />
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