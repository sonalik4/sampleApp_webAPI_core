using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Sample_App.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sample_App.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
       UsersDataAccessLayer objUser = new UsersDataAccessLayer();

        [HttpGet]
        [Route("api/user/Index")]
        public IEnumerable<Users> Index()
        {
            return objUser.GetAllUsers();
        }

        [HttpPost]
        [Route("api/user/Create")]
        public int Create([FromBody] Users user)
        {
            return objUser.Adduser(user);
        }

        [HttpGet]
        [Route("api/user/Details/{id}")]
        public Users Details(int id)
        {
            return objUser.GetuserData(id);
        }

        [HttpPut]
        [Route("api/user/Edit")]
        public int Edit([FromBody]Users user)
        {
            return objUser.Updateuser(user);
        }

        [HttpDelete]
        [Route("api/user/Delete/{id}")]
        public int Delete(int id)
        {
            return objUser.Deleteuser(id);
        }

        [HttpGet]
        [Route("api/user/GetRoleList")]
        public IEnumerable<Roles> Details()
        {
            return objUser.GetRoles();
        }
    }
}