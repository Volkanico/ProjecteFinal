package com.example.backendprivate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/inici")
    public String getHome() {
        return "home";
    }
}
