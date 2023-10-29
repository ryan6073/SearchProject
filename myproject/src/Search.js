import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card } from 'antd';
import { useSearchContext } from "./SearchContext";

function Search() {
    const navigate = useNavigate();
    const {
        searchAuthor,
        searchTitle,
        searchDoi,
        searchInstitution,
        setSearchAuthor,
        setSearchTitle,
        setSearchDoi,
        setSearchInstitution,
    } = useSearchContext();

    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        // 处理表单提交逻辑
        console.log('作者:', values.author);
        console.log('标题:', values.title);
        console.log('DOI:', values.doi);
        console.log('机构:', values.institution);
        setSearchAuthor(values.author);
        setSearchTitle(values.title);
        setSearchDoi(values.doi);
        setSearchInstitution(values.institution);
        navigate('/result');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <Card title="搜索界面" bordered={false} style={{ width: 400, margin: 'auto' }}>
                <Form form={form} onFinish={handleSubmit}>
                    <Form.Item label="作者" name="author" initialValue={searchAuthor}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="标题" name="title" initialValue={searchTitle}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="DOI" name="doi" initialValue={searchDoi}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="机构" name="institution" initialValue={searchInstitution}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Search;
