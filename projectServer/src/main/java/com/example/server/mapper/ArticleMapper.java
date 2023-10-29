package com.example.server.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.server.pojo.Article;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import org.apache.ibatis.annotations.Select;

@Mapper
@Repository
public interface ArticleMapper extends BaseMapper<Article> {
    int deleteByPoiId(@Param("poiId") int poiId);

    @Select("SELECT COUNT(*) FROM article")
    int countTotalArticles();
}
