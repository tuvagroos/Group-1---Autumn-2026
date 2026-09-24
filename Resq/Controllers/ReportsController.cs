using Microsoft.AspNetCore.Mvc;

namespace Resq.Controllers
{
    public class ReportsController : Controller
    {
        // Denne handlingen viser plassholdersiden som senere skal inneholde rapporter.
        public IActionResult Index()
        {
            return View();
        }
    }
}
