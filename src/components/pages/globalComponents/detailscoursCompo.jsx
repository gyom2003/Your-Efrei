import React, { Suspense, useState } from 'react';
import { Modal } from 'antd';
import '../style/modalSeeMore.css'

function DetailsCoursCompo({ eventInfos, showModalDetailsRef, onCancelEvent}) {

    const tableStyle = {
        'width': '50%', 
        'height': '300px'
    }
    
    return (
        <div style={tableStyle}>
            <Modal title="Informations de l'evenement" open={showModalDetailsRef} onCancel={onCancelEvent} onOk={onCancelEvent}>
                <div className="table-container">
                    <table className='table'>
                        <tbody>
                            {Object.keys(eventInfos[0]).map((key)  => (
                                <tr key={key}>
                                    <td style={{padding: '8px' }}>{key}</td>
                                    <td style={{padding: '8px' }}>{eventInfos[0][key]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Modal>
        </div>
    )
}

export default DetailsCoursCompo;