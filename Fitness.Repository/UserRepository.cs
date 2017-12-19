using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using static System.Data.CommandType;
using System.Data;
using Fitness.Entities;
using Fitness.Repository.Interfaces;

namespace Fitness.Repository
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public bool AddUser(User user)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@UserName", user.UserName);
                parameters.Add("@UserMobile", user.UserMobile);
                parameters.Add("@UserEmail", user.UserEmail);
                parameters.Add("@FaceBookUrl", user.FaceBookUrl);
                parameters.Add("@LinkedInUrl", user.LinkedInUrl);
                parameters.Add("@TwitterUrl", user.TwitterUrl);
                parameters.Add("@PersonalWebUrl", user.PersonalWebUrl);

                SqlMapper.Execute(con, "AddUser", param: parameters, commandType: StoredProcedure);
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DeleteUser(int userId)
        {
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@UserId", userId);
            SqlMapper.Execute(con, "DeleteUser", param: parameters, commandType: StoredProcedure);
            return true;
        }

        //public IList<User> GetAllUser()
        //{
        //    //UpdateMultipleUsers();

        //    IList<User> customerList = SqlMapper.Query<User>(con, "GetAllUsers", commandType: StoredProcedure).ToList();
        //    return customerList;
        //}

        //public IList<dynamic> GetAllUser() => SqlMapper.Query<dynamic>(con, "GetAllUsers", commandType: StoredProcedure).ToList();


        public IList<User> GetAllUser() => SqlMapper.Query<User>(con, "GetAllUsers", commandType: StoredProcedure).ToList();
        public User GetUserById(int userId)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@CustomerID", userId);
                return SqlMapper.Query<User>((SqlConnection)con, "GetUserById", parameters, commandType: StoredProcedure).FirstOrDefault();
            }
            catch (Exception)
            {

                throw;
            }
        }


        public bool UpdateUser(User user)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@UserId", user.UserId);
                parameters.Add("@UserName", user.UserName);
                parameters.Add("@UserMobile", user.UserMobile);
                parameters.Add("@UserEmail", user.UserEmail);
                parameters.Add("@FaceBookUrl", user.FaceBookUrl);
                parameters.Add("@LinkedInUrl", user.LinkedInUrl);
                parameters.Add("@TwitterUrl", user.TwitterUrl);
                parameters.Add("@PersonalWebUrl", user.PersonalWebUrl);

                SqlMapper.Execute(con, "UpdateUser", param: parameters, commandType: StoredProcedure);
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void InsertMultipleUsers()
        {
            object myObj = new[] {
                new { name = "B Narayan", email = "bnarayan.sharma@outlook.com" },
                new { name = "Manish Sharma", email = "manish.sharma**@outlook.com" },
                new { name = "Rohit Kumar", email = "rohit.kumar**@outlook.com" }};

            con.Execute(@"insert Users(UserName, UserEmail) values (@name, @email)", myObj);
        }

        public bool ValidateUser(loginModel user)
        {
            bool isValid = false;
            try
            {
                //DynamicParameters parameters = new DynamicParameters();
                //parameters.Add("@UserName", user.UserName);
                //parameters.Add("@Password", user.Password);
                //SqlMapper.Execute(con, "isUserExist", param: parameters, commandType: StoredProcedure);

                if (user.UserName=="Test"&& user.Password== "Test")
                {
                    isValid = true;
                }
               
                return isValid;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

    }
}
