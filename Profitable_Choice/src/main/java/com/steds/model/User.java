package com.steds.model;

import java.util.Objects;

public class User {
    private int userId;
    private String userName;
    private String firstName;
    private String lastName;
    private boolean enabled;
    private String gender;
    private String email;
    private String encryptedPassword;

    public User(int userId, String userName, String firstName, String lastName, boolean enabled, String gender, String email,String encryptedPassword) {
        this.userId = userId;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.enabled = enabled;
        this.gender = gender;
        this.email = email;
        this.encryptedPassword = encryptedPassword;
    }

    public User() {

    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public void setEncryptedPassword(String encryptedPassword){
        this.encryptedPassword = encryptedPassword;
    }
    public String getEncryptedPassword(){
        return encryptedPassword;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return enabled == user.enabled && Objects.equals(userId, user.userId) && Objects.equals(userName, user.userName) && Objects.equals(firstName, user.firstName) && Objects.equals(lastName, user.lastName) && Objects.equals(gender, user.gender) && Objects.equals(email, user.email) && Objects.equals(encryptedPassword, user.encryptedPassword);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, userName, firstName, lastName, enabled, gender, email, encryptedPassword);
    }
}
