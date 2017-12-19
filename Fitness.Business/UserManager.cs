using Fitness.Business.Interfaces;
using Fitness.Entities;
using Fitness.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Fitness.Business
{
    public class UserManager : IUserManager
    {
        IUserRepository _userRepository;
        public UserManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public bool AddUser(User user)
        {
            return _userRepository.AddUser(user);
        }

        public bool DeleteUser(int userId)
        {
            return _userRepository.DeleteUser(userId);
        }

        public IList<User> GetAllUser()
        {
            return _userRepository.GetAllUser();
        }

        public User GetUserById(int userId)
        {
            return _userRepository.GetUserById(userId);
        }

        public bool UpdateUser(User user)
        {
            return _userRepository.UpdateUser(user);
        }

        public bool ValidateUser(loginModel user)
        {
            return _userRepository.ValidateUser(user);
        }
    }
}
