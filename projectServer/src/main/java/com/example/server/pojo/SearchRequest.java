package com.example.server.pojo;

import lombok.Data;
import lombok.Getter;

@Data
public class SearchRequest {
    @Getter
    private String title;
    private String author;
    private String institution;
    private String doi;
}
