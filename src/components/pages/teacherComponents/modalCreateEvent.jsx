import React, { useState } from 'react';
import { Modal, Button, Input, Select, TimePicker, Form } from 'antd';
import dayjs from 'dayjs';

function ModalCreateEvent({spreadDataRef, selectedCalendar, loginRef}) {
    const { Option } = Select;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const isProfRef = loginRef[Object.keys(loginRef)[0]]

    const showModal = () => {
        setIsModalVisible(true);
    };
    const dontshowModal = () => {
        setIsModalVisible(false);
    };

    const handleFormData = () => {
        form.validateFields()
            .then(values => {
                const startTimeRef = values[Object.keys(values)[2]]
                const endTimeRef =values[Object.keys(values)[3]]
                const localModalEvent = {
                    ...values, 
                    startTime: startTimeRef.format("HH:mm:ss"), 
                    endTime: endTimeRef.format("HH:mm:ss"), 
                    date: selectedCalendar, 
                }
                spreadDataRef(localModalEvent)
                setIsModalVisible(false);
            })
            .catch(info => {
                console.log('mauvaises données:', info);
            });
    };

    const buttonPlacement = {
        'width': '8%', 
        'display': 'flexbox', 
        'align-items': 'flex-start', 
        'margin-left': '30px', 
        'bottom': '825px',
    }

    return (
        <> 
            {loginRef ? ( 
            <div>
                <Button type="primary" onClick={showModal} style={buttonPlacement}>
                    Add Event
                </Button>

                <Modal title="Add Event" open={isModalVisible} onOk={handleFormData} onCancel={dontshowModal}>
                    <Form form={form} layout="vertical" name="eventForm">
                        <Form.Item
                            name="title"
                            label="Title"
                            rules={[{ required: true, message: 'Entrez le nom de la matière' }]}
                        >
                            <Input placeholder="Event Title" />
                        </Form.Item>
                        <Form.Item
                            name="class"
                            label="Class"
                            rules={[{ required: true, message: 'Selectionner la classe' }]}
                        >
                            <Select placeholder="Select a class">
                                <Option value="class1">classe 1</Option>
                                <Option value="class2">classe 2</Option>
                                <Option value="class3">classe 3</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="startTime"
                            label="Start Time"
                            rules={[{ required: true, message: 'Please select the start time!' }]}
                        >
                            <TimePicker use12Hours format="h:mm a" />
                        </Form.Item>
                        <Form.Item
                            name="endTime"
                            label="End Time"
                            rules={[{ required: true, message: 'Please select the end time!' }]}
                        >
                            <TimePicker use12Hours format="h:mm a" />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            
            ) : <></>}

        </>
    )
}

export default ModalCreateEvent;