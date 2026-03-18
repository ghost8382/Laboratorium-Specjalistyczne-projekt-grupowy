package com.stock_tracker.stock_tracker.repository;

import com.stock_tracker.stock_tracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}