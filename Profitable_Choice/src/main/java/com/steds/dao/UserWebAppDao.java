package com.steds.dao;

import com.steds.model.User;
import com.steds.model.UserForm;

import java.util.List;

public interface UserWebAppDao {

    //generate user id, create encrypted password with this.passwordEncoder.encode(form.getPassword())
    public User registerUser(UserForm form);

    public User findUserByPassword (String password);

    public User loginUser(String username );

    public User findUser(int id);

    public User findUserByName(String userName);

    public User findUserByEmail(String email);

    void deleteUser(long id);

    public List<User> getAllUsers();


}
