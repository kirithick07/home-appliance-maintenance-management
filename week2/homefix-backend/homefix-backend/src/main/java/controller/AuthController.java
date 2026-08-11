package com.homefix.controller;

import com.homefix.model.User;
import com.homefix.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // Test backend
    @GetMapping("/test")
    public String test() {
        return "HomeFix Backend is working!";
    }

    // Register new user
    @PostMapping("/auth/register")
    public User register(@RequestBody User user) {
        return authService.register(user);
    }
}