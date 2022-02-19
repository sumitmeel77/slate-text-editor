import React from 'react';
import { MdFormatBold, MdFormatItalic, MdStrikethroughS, MdFormatUnderlined, MdFormatQuote, MdFormatAlignLeft, MdFormatAlignCenter, MdFormatAlignRight, MdFormatListNumbered, MdFormatListBulleted, MdInsertLink, MdImage, MdAdd } from 'react-icons/md'
import { FaSuperscript, FaSubscript } from 'react-icons/fa'
import { AiOutlineTable, AiOutlineInsertRowBelow, AiOutlineInsertRowRight, AiOutlineDelete } from 'react-icons/ai'
const iconList = {
    bold: <MdFormatBold size={20} />,
    italic: <MdFormatItalic size={20} />,
    strikethrough: <MdStrikethroughS size={20} />,
    underline: <MdFormatUnderlined size={20} />,

    blockquote: <MdFormatQuote size={20} />,
    superscript: <FaSuperscript size={15} />,
    subscript: <FaSubscript size={15} />,
    alignLeft: <MdFormatAlignLeft size={20} />,
    alignCenter: <MdFormatAlignCenter size={20} />,
    alignRight: <MdFormatAlignRight size={20} />,
    orderedList: <MdFormatListNumbered size={20} />,
    unorderedList: <MdFormatListBulleted size={20} />,
    link: <MdInsertLink size={20} />,
    image: <MdImage size={20} />,
    add: <MdAdd size={20} />,
    table: <AiOutlineTable size={20} />,
    row: <AiOutlineInsertRowBelow size={20} />,
    column: <AiOutlineInsertRowRight size={20} />,
    removeTable: <AiOutlineDelete size={20} />
}




const Icon = (props) => {
    const { icon } = props
    return (
        iconList[icon]
    )
}

export default Icon;