package com.steds.dao;

import com.steds.model.User;
import com.steds.model.UserForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

@Repository
public class UserWepAppDaoJdbcTemplateImpl implements UserWebAppDao {

    private JdbcTemplate jdbcTemplate;

    private static final Map<Integer, User> USERS_MAP = new HashMap<Integer, User>();
    private final static Random randomizer = new Random(System.currentTimeMillis());

    // Prepared statement strings
    private static final String INSERT_USER_SQL =
            "insert into User (userID, userName, firstName, lastName, enabled, gender, email, password) values (?, ?, ?, ?, ?, ?, ?, ?)";
    private static final String SELECT_USER_SQL =
            "select * from User where userID = ?";
    private static final String SELECT_USER_BY_USERNAME_SQL =
            "select * from User where userName = ?";
    private static final String SELECT_USER_BY_EMAIL_SQL =
            "select * from User where email = ?";
    private static final String DELETE_USER_SQL =
            "delete from User where userID = ?";
    //implement update methods still
    private static final String UPDATE_USER_SQL =
            "update User set userID = ?, userName = ?, firstName = ?, lastName = ?, enabled = ?, gender = ?, password = ? where id = ?";
    private static final String SELECT_ALL_USERS_SQL =
            "select * from User";
    private static final String SELECT_USER_BY_PASSWORD_SQL =
            "select * from User where password = ?";
    
    @Autowired
    public UserWepAppDaoJdbcTemplateImpl(JdbcTemplate jdbcTemplate) {

        this.jdbcTemplate = jdbcTemplate;
    }

    //generate user id, create encrypted password with this.passwordEncoder.encode(form.getPassword())
    @Override
    public User registerUser(UserForm form) {
        int generateID = 10000 + randomizer.nextInt(20000);
        int userId = generateID;
       // String encryptedPassword = this.passwordEncoder.encode(form.getPassword());      -----> figure out how to encrypt later

        User newUser = new User(userId, form.getUserName(), form.getFirstName(), form.getLastName(), true, form.getGender(), form.getEmail(), form.getPassword());

        //Update the users Map we have to keep track of all users
        USERS_MAP.put(userId, newUser);

        //Store original password inside of DB
        jdbcTemplate.update(INSERT_USER_SQL,
                newUser.getUserId(), newUser.getUserName(), newUser.getFirstName(), newUser.getLastName(), newUser.isEnabled(), newUser.getGender(), newUser.getEmail(), form.getPassword());
        return newUser;
    }

    //Do log-in later but for log in we need to surround it with try and catch blocks to see a valid login. Also create an additional model for logging in with String userID and password.
    @Override
    public User loginUser(String password) {
        User returnUser = null;
;
        String logginpassword = password;
        System.out.println(logginpassword);
        User loggingUser = findUserByPassword(logginpassword);

        return loggingUser;
    }

    @Override
    public User findUser(int id) {
        try {
            return jdbcTemplate.queryForObject(SELECT_USER_SQL, this::mapRowToUser, id);

        } catch (EmptyResultDataAccessException e) {
            // if nothing is returned just catch the exception and return null

            return null;
        }    }

    @Override
    public User findUserByPassword (String password) {
        return jdbcTemplate.queryForObject(SELECT_USER_BY_PASSWORD_SQL, this::mapRowToUser, password);
    }

    @Override
    public User findUserByName(String userName) {
        try{
            return jdbcTemplate.queryForObject(SELECT_USER_BY_USERNAME_SQL, this::mapRowToUser, userName);
        }
        catch(Exception e){
            System.out.println(e);
        }
        return null;
    }

    @Override
    public User findUserByEmail(String email) {
        return jdbcTemplate.queryForObject(SELECT_USER_BY_USERNAME_SQL, this::mapRowToUser, email);
    }

    @Override
    public void deleteUser(long id) {
        jdbcTemplate.update(DELETE_USER_SQL, id);
    }

    @Override
    public List<User> getAllUsers() {
        return jdbcTemplate.query(SELECT_ALL_USERS_SQL, this::mapRowToUser);
    }

    private User mapRowToUser(ResultSet rs, int rowNum) throws SQLException {
        User user = new User();
        user.setUserId(rs.getInt("userID"));
        user.setUserName(rs.getString("userName"));
        user.setFirstName(rs.getString("firstName"));
        user.setLastName(rs.getString("lastName"));
        user.setEnabled(rs.getBoolean("enabled"));
        user.setGender(rs.getString("gender"));
        user.setEmail(rs.getString("email"));
        user.setEncryptedPassword(rs.getString("password"));

        return user;
    }


}
