class Course:
	""" Class for defining Course objects """
	def __init__(self, name, code, instructor, section, time):
		self.name = name
		self.code = code
		self.instructor = instructor
		self.section = section
		self.time = time

	def __eq__(self, other):
		return ((self.code == other.code) and (self.section == other.section))
