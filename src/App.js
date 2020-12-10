
import React from 'react'
import { Button, Divider } from 'antd';
import Layout, {  Header } from 'antd/lib/layout/layout';
import { EmailAndName } from './components/EmailAndName';
import { TextAndMessage } from './components/TextAndMessage';
import "antd/dist/antd.css";






export const App = () => {

  return (
       <Layout style={{height:'100%',margin:'0'}}>
        <Header className="headercss">Bienvenido Nombre</Header>
        <Divider orientation="center">Aqui va el candidato</Divider>
        <div className="row contentcss">
          <div className="col-md-6 contentcss">
            <TextAndMessage/>            
          </div>
          <div className="col-md-6">
            <EmailAndName/>
          </div> 
        </div>
        <Button  type="primary">Enviar a los destinatarios</Button>  
      </Layout> 
  )
}

