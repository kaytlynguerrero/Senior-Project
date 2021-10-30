package com.steds.dao;

import com.steds.model.User;
import com.steds.model.UserForm;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class UserWebAppDaoTest {

    @Autowired
    protected UserWebAppDao dao;

    @Before
    public void setUp() throws Exception {
        //clea out the test db
        List<User> uList = dao.getAllUsers();

        for(User u: uList){
            dao.deleteUser(u.getUserId());
        }
    }

    @Test
    public void addGetDeleteUser() {
        //Arrange...

        UserForm newuser = new UserForm();
        newuser.setUserId(12345L);
        newuser.setUserName("sabur123");
        newuser.setFirstName("sabur");
        newuser.setLastName("khan");
        newuser.setEnabled(true);
        newuser.setGender("male");
        newuser.setEmail("saburkhanatx@gmail.com");
        newuser.setPassword("password");
        newuser.setConfirmPassword("password");

        //Act
        User user = dao.registerUser(newuser);
        User user2 = dao.findUser(user.getUserId());

        //Assert
        assertEquals(user,user2);

        //Act
        dao.deleteUser(user.getUserId());
        user2 = dao.findUser(user.getUserId());

        //Assert
        assertNull(user2);

    }



}
