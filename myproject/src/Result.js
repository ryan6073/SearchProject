import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table, Spin } from 'antd';
import { useSearchContext } from './SearchContext';

const columns = [
    {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'DOI',
        dataIndex: 'doi',
        key: 'doi',
    },
    {
        title: '机构',
        dataIndex: 'institution',
        key: 'institution',
    },
    {
        title: '期刊',
        dataIndex: 'journal',
        key: 'journal',
    },
    {
        title: '被引用次数',
        dataIndex: 'citations',
        key: 'citations',
    },
    {
        title: '浏览次数',
        dataIndex: 'views',
        key: 'views',
    },
    {
        title: '收录时间',
        dataIndex: 'accepted',
        key: 'accepted',
    },
    {
        title: '发表时间',
        dataIndex: 'published',
        key: 'published',
    },
    {
        title: '修订时间',
        dataIndex: 'revised',
        key: 'revised',
    },

];

function Result() {
    const navigate = useNavigate();
    const { searchAuthor, searchTitle, searchDoi, searchInstitution, searchResult, setSearchResult } = useSearchContext();

    useEffect(() => {
        // 执行数据库检索操作
        const fetchSearchResult = async () => {
            try {
                // 构建请求参数对象
                const requestBody = {};

                if (searchDoi) {
                    requestBody.searchDoi = searchDoi;
                } else {
                    // 如果 searchDOI 为空，向后端发送其他参数
                    requestBody.searchAuthor = searchAuthor;
                    requestBody.searchTitle = searchTitle;
                    requestBody.searchInstitution = searchInstitution;
                }

                // 使用 fetch 或 axios 发起后端 API 请求来执行数据库检索
                // 请根据您的后端设置合适的 API 地址
                const response = await fetch('http://localhost:8080/search', {
                    method: 'POST',
                    body: JSON.stringify(requestBody),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setSearchResult(data);
                } else {
                    console.error('数据库检索失败');
                }
            } catch (error) {
                console.error('数据库检索失败', error);
            }
        };

        fetchSearchResult();
    }, [searchAuthor, searchTitle, searchDoi, searchInstitution, setSearchResult]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            <Card title="搜索结果" bordered={false} style={{ width: '100%', margin: 'auto' }}>
                {searchResult ? (
                    <Table
                        dataSource={searchResult}
                        columns={columns}
                        pagination={false} // 可以根据需要启用分页
                    />
                ) : (
                    <Spin size="large" />
                )}
            </Card>
        </div>
    );
}

export default Result;
