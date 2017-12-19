using System;
using System.Collections.Generic;
using System.Text;

namespace Fitness.Entities
{
  public  class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserMobile { get; set; }
        public string UserEmail { get; set; }
        public string FaceBookUrl { get; set; }
        public string LinkedInUrl { get; set; }
        public string TwitterUrl { get; set; }
        public string PersonalWebUrl { get; set; }
        public bool IsDeleted { get; set; }
        public string Password { get; set; }
    }

    public class loginModel
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserMobile { get; set; }
        public string UserEmail { get; set; }
        public string FaceBookUrl { get; set; }
        public string LinkedInUrl { get; set; }
        public string TwitterUrl { get; set; }
        public string PersonalWebUrl { get; set; }
        public bool IsDeleted { get; set; }
        public string Password { get; set; }
    }
}
