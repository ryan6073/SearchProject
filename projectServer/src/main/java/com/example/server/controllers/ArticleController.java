package com.example.server.controllers;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.server.mapper.ArticleMapper;
import com.example.server.pojo.Article;
import com.example.server.pojo.SearchRequest;
import com.example.server.service.IArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin //允许跨域访问
@RestController
@Slf4j
@RequestMapping("/")
public class ArticleController {

    @Autowired
    private IArticleService iArticleService;

    @PostMapping ("/search")
    public List<Article> list(@RequestBody SearchRequest searchRequest) {
        QueryWrapper<Article> queryWrapper = new QueryWrapper<>();

        if (searchRequest.getDoi() != null && !searchRequest.getDoi().isEmpty()) {
            queryWrapper.like("doi", searchRequest.getDoi());
        }
        if (searchRequest.getAuthor() != null) {
            queryWrapper.like("author", searchRequest.getAuthor());
        }

        if (searchRequest.getTitle() != null) {
            queryWrapper.like("title", searchRequest.getTitle());
        }

        if (searchRequest.getInstitution() != null) {
            queryWrapper.like("institution", searchRequest.getInstitution());
        }


        return iArticleService.list(queryWrapper);
    }

}




