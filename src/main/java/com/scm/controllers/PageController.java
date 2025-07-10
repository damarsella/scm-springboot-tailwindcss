package com.scm.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PageController {

    @GetMapping("/home")
    public String home(Model model) {
        System.out.println("Home Page Handler");

        // send data to view
        model.addAttribute("name", "Damar Sella");
        model.addAttribute("belajar", "Belajar Java Spring Boot");
        model.addAttribute("githubRepo", "https://github");
        return "home";
    }

    // about 

    @GetMapping("/about")
    public String aboutPage(Model model) {
        model.addAttribute("isLogin", true);
        System.out.println("About Page loading..");
        return "about";
    }

     // services

    @GetMapping("/services")
    public String servicesPage() {
        System.out.println("Services Page loading..");
        return "services";
    }

    // contact

    @GetMapping("/contact")
    public String contact() {
        return new String("contact");
    }

    @GetMapping("/login")
    public String login() {
        return new String("login");
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

}
