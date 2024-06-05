import React, { useState } from 'react';
import { Modal, Button, Input, Select, TimePicker, Form } from 'antd';

function ModalCreateEvent() {
    const { Option } = Select;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };
    const dontshowModal = () => {
        setIsModalVisible(false);
    };

    const handleFormData = () => {
        form.validateFields()
            .then(values => {
                console.log('Form values:', values);
                // Handle form submission logic here
                setIsModalVisible(false);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    return (
        <div>
             <Button type="primary" onClick={showModal}>
                Add Event
            </Button>

            <Modal title="Add Event" visible={isModalVisible} onOk={handleFormData} onCancel={dontshowModal}>
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
                            <Option value="class1">Class 1</Option>
                            <Option value="class2">Class 2</Option>
                            <Option value="class3">Class 3</Option>
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
    )
}

export default ModalCreateEvent;