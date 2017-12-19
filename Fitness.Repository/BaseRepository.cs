using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;


namespace Fitness.Repository
{
   public class BaseRepository:IDisposable
    {
        protected IDbConnection con;
        public BaseRepository()
        {
            
            string connectionString = "Data Source=****;Initial Catalog=DataManagement;Integrated Security=True";
            con = new SqlConnection(connectionString);
        }
        public void Dispose()
        {
            //throw new NotImplementedException();  
        }
    }
}
