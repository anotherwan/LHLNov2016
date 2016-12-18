# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  return @candidates.select {|candidate| candidate[:id] == id}
end
# .find returns object in an array ; .select returns an object
# .each below works
  # @candidates.each do |candidate|
  #   if id == candidate[:id]
  #     return candidate
  #   end
  # end
  # return nil

def experienced?(candidate)
  candidate[:years_of_experience] >= 2
end

def github_points?(candidate)
  candidate[:github_points] >= 100
end

def languages?(candidate)
  candidate[:languages].include?("Ruby") || candidate[:languages].include?("Python")
end

def date_applied?(candidate)
    candidate[:date_applied] > 15.days.ago.to_date
end

def age?(candidate)
  candidate[:age] >= 18
end

def qualified_candidates(candidates)
  potential_candidates = []
  candidates.each do |candidate|
    if
      experienced?(candidate) &&
      github_points?(candidate) &&
      languages?(candidate) &&
      date_applied?(candidate) &&
      age?(candidate)
    potential_candidates << candidate
    end
  end
potential_candidates
end

#experiment to see how to sort qualified_candidates
# def ordered_by_qualifications(candidates)
#   sorted_candidates = []
#     candidates.sort_by do |candidate|
#     candidate[:years_of_experience]
#   sorted_candidates << candidate
#   end
# end
def ordered_by_qualifications(candidates)
  candidates.sort_by {|candidate| [candidate[:years_of_experience], candidate[:github_points]] }.reverse
end
