package com.example.server.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("paper_info")
public class Article {
    private String author;
    private String title;
    private String accepted;
    private String published;
    private String revised;
    private String institution;
    private String doi;
    private String views;
    private String citations;
    private String journal;

}
