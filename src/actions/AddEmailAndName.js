import React, { useState } from 'react'
import { Button, Input, Form, Tooltip} from 'antd'
import { QuestionCircleTwoTone } from '@ant-design/icons';

export const AddEmailAndName = ({ addEmail }) => {


  const [emailNames, setEmailNames] = useState('');


  const onFinish = (values) => {
    addEmail(values);
    setEmailNames('');
    };

    const [form] = Form.useForm();
    const [formLayout] = useState('inline');

  
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: {
              span: 4,
            },
            wrapperCol: {
              span: 14,
            },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
          ? {
              wrapperCol: {
                span: 14,
                offset: 4,
              },
            }
          : null;

    return (    
        <>
          <Form
              className="addEmailAndNamecss"
              name="basic" {...formItemLayout}
              layout={formLayout}
              form={form}
              onFinish={onFinish}
              >

                <Form.Item name="name" label="Nombre" 
                  rules={[{ required:true, message:'¡Debe ingresar el nombre!',}]}>
                      <Input 
                          type="text" 
                          placeholder="Aqui va el nombre" 
                          value={emailNames.name}
                          suffix={
                            <Tooltip title="Coloque el nombre de la persona">
                              <QuestionCircleTwoTone style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                          }  
                          onChange={(e) => setEmailNames(e.target.value)}
                        />
                </Form.Item>

                <Form.Item 
                  name="email" 
                  label="Email"
                  rules={[{type:'email',message:'Lo ingresado no es un correo valido'},{required:true, message:'¡Debe ingresar el correo!'}]}
                >
                    <Input 
                      type="text" 
                      placeholder="Aqui va el correo" 
                      value={emailNames.email}
                      suffix={
                        <Tooltip title="Coloque el email de la persona">
                          <QuestionCircleTwoTone style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                      }    
                      onChange={(e) => setEmailNames(e.target.value)}
                    />
                </Form.Item>
      
                <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" {...buttonItemLayout}
                >
                  Agregar correo
                </Button>
              </Form.Item>
              
          </Form>       
        </>
    )
}
