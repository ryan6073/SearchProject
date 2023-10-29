package com.example.server.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.server.pojo.Article;
import org.springframework.stereotype.Service;


public interface IArticleService extends IService<Article> {
    int countTotalArticles();
}
