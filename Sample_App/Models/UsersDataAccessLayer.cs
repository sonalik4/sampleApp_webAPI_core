using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sample_App.Models
{
    public class UsersDataAccessLayer
    {
        PracticeExamContext db = new PracticeExamContext();

        public IEnumerable<Users> GetAllUsers()
        {
            try
            {
                return db.Users.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new user record   
        public int Adduser(Users user)
        {
            try
            {
                db.Users.Add(user);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar user  
        public int Updateuser(Users user)
        {
            try
            {
                db.Entry(user).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular user  
        public Users GetuserData(int id)
        {
            try
            {
                Users user = db.Users.Find(id);
                return user;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular user  
        public int Deleteuser(int id)
        {
            try
            {
                Users emp = db.Users.Find(id);
                db.Users.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Get the list of Cities  
        public List<Roles> GetRoles()
        {
            List<Roles> lstCity = new List<Roles>();
            lstCity = (from CityList in db.Roles select CityList).ToList();

            return lstCity;
        }
    }
}  
   
