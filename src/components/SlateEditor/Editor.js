import React, { useCallback, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { withHistory } from "slate-history";
import { Slate, Editable, withReact } from 'slate-react';
import Toolbar from './Toolbar/Toolbar'
import withLinks from './plugins/withLinks.js'
import withEmbeds from './plugins/withEmbeds.js'
import './Editor.css'
import Link from './Elements/Link/Link'
import Image from './Elements/Image/Image'


const Element = (props) => {

    const { attributes, children, element } = props;

    switch (element.type) {
        case 'blockquote':
            return <blockquote {...attributes}>{children}</blockquote>
        case 'alignLeft':
            return <div style={{ textAlign: 'left', listStylePosition: 'inside' }} {...attributes}>{children}</div>
        case 'alignCenter':
            return <div style={{ textAlign: 'center', listStylePosition: 'inside' }} {...attributes}>{children}</div>
        case 'alignRight':
            return <div style={{ textAlign: 'right', listStylePosition: 'inside' }} {...attributes}>{children}</div>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'orderedList':
            return <ol type='1' {...attributes}>{children}</ol>
        case 'unorderedList':
            return <ul {...attributes}>{children}</ul>
        case 'link':
            return <Link {...props} />
        case 'image':
            return <Image {...props} />
        default:
            return <p {...attributes}>{children}</p>
    }
}
const Leaf = ({ attributes, children, leaf }) => {

    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.code) {
        children = <code>{children}</code>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }
    if (leaf.strikethrough) {
        children = <span style={{ textDecoration: 'line-through' }}>{children}</span>
    }
    if (leaf.underline) {
        children = <u>{children}</u>
    }
    if (leaf.superscript) {
        children = <sup>{children}</sup>
    }
    if (leaf.subscript) {
        children = <sub>{children}</sub>
    }
    if (leaf.color) {
        children = <span style={{ color: leaf.color }}>{children}</span>
    }
    return <span {...attributes}>{children}</span>
}
// const Add = ({ Values }) => {
//     return (
//         <div>
//             <div className="listContainer">
//                 <li>
//                     {Values.data}
//                 </li>
//             </div>
//         </div>
//     );
// }
const SlateEditor = () => {
    const editor = useMemo(() => withHistory(withEmbeds(withLinks(withReact(createEditor())))), []);

    const [value, setValue] = useState([
        {
            type: 'paragaph',
            children: [{
                text: 'There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour or randomised wowhich dont look even slightly believable. If you are going to use a passage. There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, orrandowowhich dont look even slightly believable. If you are going to use a passage.'
            }],
        },
    ]);

    // const [ListValue, setListValue] = useState([
    //     {
    //         data: "ghghhgghghghgh"
    //     },
    //     { data: "html poc" },
    //     { data: "git poc" },
    //     { data: "backend poc" }
    // ]);

    // const AddListItem = () => {
    //     var inputvalue = document.getElementById("myInput").value;
    //     // const contentdata = JSON.stringify(value)
    //     if (inputvalue == "") {
    //         alert("write something")
    //     } else {
    //         setListValue([...ListValue,
    //         {
    //             data:
    //                 <div>
    //                     {inputvalue}
    //                     <Slate editor={editor} value={value}
    //                         onChange={newValue => {
    //                             setValue(newValue)

    //                             const isAstChange = editor.operations.some(
    //                                 op => 'set_selection' !== op.type
    //                             )
    //                             if (isAstChange) {
    //                                 // Save the value to Local Storage.
    //                                 const content = JSON.stringify(newValue)
    //                                 localStorage.setItem('content', content)
    //                             }
    //                         }} >
    //                         <div className="editor-wrapper" style={{ border: '1px solid #f3f3f3', padding: '10px 10px' }}>
    //                             <Editable
    //                                 placeholder='Write something'
    //                                 renderElement={renderElement}
    //                                 renderLeaf={renderLeaf}
    //                             />
    //                         </div>
    //                     </Slate>

    //                 </div>
    //         }
    //         ]);
    //         document.getElementById("myInput").value = "";

    //     }
    // };
    const renderElement = useCallback(props => <Element {...props} />, [])

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])


    return (

        <>
            {/* <div className="container">
                <div class="row">
                    <div class="col-10">
                        <input type="text" placeholder="write Name" id="myInput" />
                    </div>
                    <div class="col-2">
                        <button onClick={AddListItem} >Add</button>
                    </div>
                </div>

            </div> */}

            <Slate editor={editor} value={value}
                onChange={newValue => {
                    setValue(newValue)

                    // const isAstChange = editor.operations.some(
                    //     op => 'set_selection' !== op.type
                    // )
                    // if (isAstChange) {
                    //     // Save the value to Local Storage.
                    //     const content = JSON.stringify(newValue)
                    //     localStorage.setItem('content', content)
                    // }
                }} >
                <Toolbar />
                <div className="editor-wrapper" style={{ border: '1px solid #f3f3f3', padding: '10px 10px' }}>
                    <Editable
                        placeholder='Write something'
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                    />
                </div>
            </Slate>
            {/* <div>
                {
                    ListValue.map(
                        (dataValue, dataKey) =>
                            <Todo Values={dataValue} index={dataKey} Valueskey={dataKey} />)
                }
            </div> */}
        </>

    )
}

export default SlateEditor