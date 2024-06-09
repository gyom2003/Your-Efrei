import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Button, Modal, Form, Input, InputNumber, notification } from 'antd';

function GlobalGrades( {events} ) {
    const location = useLocation();
    const loginTokenData = location.state
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [grades, setGrades] = useState(() => {
        const savesGrades = window.localStorage.getItem('grades')
        return savesGrades ? JSON.parse(savesGrades) : []
    });

    useEffect(() => {
        if (grades.length > 0) {
            window.localStorage.setItem('grades', JSON.stringify(grades))
        } else {
            console.log("no modif")
        }
    }, [grades])

    const isProfRef = loginTokenData[Object.keys(loginTokenData)[1]]
    const [form] = Form.useForm()

    const showModal = (event) => {
        setSelectedEvent(event)
        setIsModalVisible(true)
    }

    const OkModal = () => {
        form.validateFields()
            .then(values => {
                setGrades([...grades, {...values, eventId: selectedEvent.id}])
                console.log(grades)
                setIsModalVisible(false)
                form.resetFields()
                notification.info({
                    message: "note ajouté avec succès !", 
                    duration: 2
                })
            })
            .catch(info => {
                console.log("erreur form notation", toString(info))
            })

    }

    const cancelModal = () => {
        setIsModalVisible(false)
        form.resetFields();
    }

    const showProfList = () => {
        return events.map(event => (
            <div style={{'display': 'flex', 'justifyContent': 'center'}}>
                <p style={{'color': 'black','margin': '10px'}}>{event.title}</p>
                <Button onClick={() => showModal(event)}>Ajouter une note</Button>
            </div>
        ))
    }

    const showStudentGrades = () => {
        const showGradesCond = grades.filter(grade => grade.studentClass = loginTokenData.classDataRef);
        return showGradesCond.map(grade => {
            console.log(grade)
            const event = events.find(event => event.id === grade.eventId);
            if (!event) {
                console.log(`pas d'evenents trouvé pour le grade id :  ${grade.eventId}`);
                return null;
            }
            return (
                <div key={grade.eventId}>
                    <p style={{ color: 'black' }}>Matière: {event.title}</p>
                    <p style={{ color: 'black' }}>Note: {grade.mark} / 20</p>
                </div>
            );
        });
    };

    return (
        <>
            {isProfRef ? (
                <div>
                    <h2 style={{'display': 'flex', 'justifyContent': 'center'}}>Liste des cours</h2>
                    {showProfList()}
                </div>
            ) : (
                <div>
                    <h2 style={{'display': 'flex', 'justifyContent': 'center'}}>Mes notes</h2>
                    {showStudentGrades()}
                </div>
            )}

            <Modal
                title="Ajouter une note"
                visible={isModalVisible}
                onCancel={cancelModal}
                footer={[
                    <Button key="back" onClick={cancelModal}>Annuler</Button>,
                    <Button key="submit" type="primary" onClick={OkModal}>OK</Button>
                ]}
            >

            <Form form={form} layout='vertical'>
                <Form.Item 
                name="student name"
                label="nom de l'élève"
                rules={[{ required:true, message: "Entrer le nom de l'élève" }]}>
                <Input placeholder="nom de l'eleve"/>
                </Form.Item>

                <Form.Item 
                name="mark"
                label="note de l'élève"
                rules={[{ required:true, message: "Entrer la classe de l'élève" }]}>
                <InputNumber min={0} max={20} placeholder="note de l'élève"/> 
                </Form.Item>
            </Form>
            </Modal>
        </>
    )
}

export default GlobalGrades;