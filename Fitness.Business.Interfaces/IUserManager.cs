using Fitness.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Fitness.Business.Interfaces
{
    public interface IUserManager
    {
        bool AddUser(User user);

        bool UpdateUser(User user);

        bool DeleteUser(int userId);

        IList<User> GetAllUser();

        User GetUserById(int userId);

        bool ValidateUser(loginModel user);

    }
}
