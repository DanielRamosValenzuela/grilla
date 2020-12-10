import React, { useState } from 'react';
import uuid from 'react-uuid'
import { AddEmailAndName } from '../actions/AddEmailAndName';
import { Button, Popconfirm, Table } from 'antd';
import { DeleteFilled } from '@ant-design/icons';






export const EmailAndName = () => {

 

   
  const [emailNames, setEmailNames] = useState([])      
  const addEmail = (emailName) => {
        const {email, name} = emailName;
        const key = uuid();
        setEmailNames([...emailNames, { name, email, key }])
      }


  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key:'name'
      
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key:'email'
    },
    {
      title: 'Acciones',
      dataIndex: 'acciones',
      key: "acciones",
      render: (text, record) => 
      <>   
          <Popconfirm 
            title="Seguro que quiere eliminar"
            onConfirm={() => handleDelete(record.key)}>
            <Button type="link" icon={<DeleteFilled />} danger/>
          </Popconfirm>    
      </>
        },
  ];
  
  const handleDelete = ( key ) => {
    const dataSource = emailNames.filter((item) => item.key !== key );
    setEmailNames(dataSource);       
  }


    return (
        <>
          <AddEmailAndName addEmail={addEmail}/>
              <Table
                  className="talblecss"
                  key={emailNames.key}
                  columns={columns}
                  dataSource={emailNames}
                />

        </>
    )
}
