package com.example.server.service.Impl;

import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.server.mapper.ArticleMapper;
import com.example.server.pojo.Article;
import com.example.server.service.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper, Article> implements IArticleService {
    @Autowired
    private ArticleMapper articleMapper;
    @Override
    public int countTotalArticles() {
        int totalArticles = articleMapper.countTotalArticles();
        int totalPages = (int) Math.ceil((double) totalArticles / 6);
        return totalPages;
    }
}
