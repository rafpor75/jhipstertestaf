package com.saf.repository;

import com.saf.domain.Facolta;
import com.saf.domain.PianiDiStudio;

import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Facolta entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FacoltaRepository extends JpaRepository<Facolta, Long> {
	@Query("select facolta from Facolta facolta left join fetch facolta.relFacCdls where facolta.id =:id")
    Facolta findOneWithEagerRelationships(@Param("id") Long id);
}
