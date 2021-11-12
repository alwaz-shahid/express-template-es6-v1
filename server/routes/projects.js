import { Router } from 'express'
import { userAuth } from '../utils/auth/basic/basicAuth'
import { canViewProject, scopedProjects } from '../utils/auth/permissions/projectpermissions'
import { projects } from '../utils/data'

const router = Router()

router.get('/',userAuth, (req, res) => {
  res.json(scopedProjects(req.user, projects))
})

router.get('/:projectId', setProject, authGetProject ,(req, res) => {
  res.json(req.project)
})

function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId)
  req.project = projects.find(project => project.id === projectId)
  
  if (req.project == null) {
    res.status(404)
    return res.send('Project not found')
  }
  next()
}

function authGetProject(req, res, next) {
  if (!canViewProject(req.user, req.project)) {
    res.status(401)
    return res.send('Not authorized')  
  } 
  next()
}

export default router

// function authGetProject(req, res, next) {
//   if (projectPermissions.canGetProject(req.user, req.project)) {
//     next()
//   } else {
//     res.status(401)
//     return res.send('Unauthorized')
//   }
// }