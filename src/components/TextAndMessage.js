
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import { QuestionCircleTwoTone } from '@ant-design/icons';
import Form from 'antd/lib/form/Form';
import { Tooltip } from 'antd';



export const TextAndMessage = () => {

    return (
        <>
            <Form>
                <Tooltip title="Aqui va el lema que tiene el candidato">
                    <QuestionCircleTwoTone 
                        className="questionCircleTwoTonecss"   
                    />     
                </Tooltip>               
                <TextArea className="text__area"
                    placeholder="Aqui va el lema"  
                    disabled={true} 
                    autoSize={{minRows: 6, maxRows: 10}}
                />
                <Tooltip title="Aqui usted coloca el mensaje que quiere envíar"> 
                    <QuestionCircleTwoTone 
                        className="questionCircleTwoTonecss" 
                    />  
                </Tooltip>       
                <TextArea 
                    className="text__area" 
                    placeholder="Aqui va el mensaje" 
                    maxLength={1000} 
                    autoSize={{minRows: 6, maxRows: 10}} 
                />     
            </Form>
                       
        </>
    )
}
